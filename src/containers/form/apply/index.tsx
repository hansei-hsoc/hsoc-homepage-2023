import { NextPage } from 'next';
import Router from 'next/router';
import { useSession } from 'next-auth/react';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import RightArrowSVG from '@/assets/svg/right-arrow.svg';
import LogoBig from '@/assets/png/logo-big.png';
import { Error, FormProps, instance, Success } from '@/utils';
import { FormButton, Input } from '@/components';

import * as S from '../styled';

const ApplyPage: NextPage = () => {
  const { status } = useSession();
  const [info, setInfo] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormProps>();

  const onValid = async (formData: FormProps) => {
    const { data } = await instance.post('/api/update', {
      phoneNumber: formData.phoneNumber,
      introduce: formData.introduce,
      field: formData.field,
      portfolio: formData.portfolio,
    });
    data.ok
      ? (Success(data.message),
        setValue('phoneNumber', ''),
        setValue('introduce', ''),
        setValue('portfolio', ''))
      : Error(data.message);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length === 10) {
      setValue('phoneNumber', inputValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (inputValue.length === 13) {
      setValue(
        'phoneNumber',
        inputValue.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      );
    }
  };

  const textAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length > 3000) {
      setValue('introduce', inputValue.slice(0, 3000));
      setValue('portfolio', inputValue.slice(0, 3000));
    }
  };

  const getMyInfo = async () => {
    const { data } = await instance.post('/api/user');
    data.ok
      ? (setInfo(true),
        setValue('phoneNumber', data.phoneNumber),
        setValue('introduce', data.introduce),
        setValue('portfolio', data.portfolio),
        setValue('field', data.field))
      : Error(data.message);
  };

  useEffect(() => {
    if (status === 'unauthenticated') {
      Router.replace('/login?redirect=/apply');
    }
  }, [status, info]);

  return (
    <>
      {status === 'authenticated' && (
        <>
          <S.LogoBigImage src={LogoBig.src} />
          <S.ApplyWrap>
            <S.FormDiv>
              <S.GetMyInfoMessage onClick={getMyInfo}>
                수정하기
                <RightArrowSVG style={{ marginBottom: '4px' }} />
              </S.GetMyInfoMessage>
              <S.InfoDiv>
                <Input
                  register={register}
                  errors={errors}
                  title="전화번호"
                  name="phoneNumber"
                  minValue={13}
                  maxValue={13}
                  onChange={onChange}
                  divStyle={{ marginTop: '10px' }}
                />
                <Input
                  register={register}
                  errors={errors}
                  title="자기소개"
                  name="introduce"
                  minValue={1}
                  maxValue={3000}
                  textAreaChange={textAreaChange}
                />
                <Input
                  register={register}
                  errors={errors}
                  title="자기 역량"
                  name="portfolio"
                  minValue={1}
                  maxValue={3000}
                  example="다룰 줄 아는 프로그래밍 언어나 진행해본 프로젝트 같은 것이 있다면 자유롭게 적어주세요."
                  textAreaChange={textAreaChange}
                />
                <Input
                  register={register}
                  errors={errors}
                  title="배우고싶은 분야"
                  name="field"
                  minValue={1}
                  maxValue={1}
                />
              </S.InfoDiv>
              <FormButton
                handleSubmit={handleSubmit}
                onValid={onValid}
                title={info ? '수정하기' : '지원하기'}
              />
            </S.FormDiv>
          </S.ApplyWrap>
        </>
      )}
    </>
  );
};

export default ApplyPage;
