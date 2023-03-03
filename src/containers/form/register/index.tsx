import { NextPage } from "next";
import * as S from "../styled";
import LogoBig from "src/assets/png/logo-big.png";
import { useForm } from "react-hook-form";
import { Input } from "src/components/Input/input";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"
import { Instance } from "src/lib/api";
import FormButton from "src/components/FormButton";
import { FormProps } from "../../../lib/interface";
import Link from "next/link";
import { Success, Error, CatchError } from "src/lib/notification";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { ValueInput } from "src/components/Input/value-input";

const RegisterPage: NextPage = () => {
    const { status } = useSession();

    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>();

    const onValid = async (data: FormProps) => {
        const instance = Instance(`/api/create`)
        try {
            await instance.post('', {
                nickName: data.nickName,
                name: data.name,
                studentId: data.studentId,
                password: data.password,
            }).then((res) => {
                res.data.ok ? (
                    Router.replace("/login")
                ) : (
                    Error(res.data.message)
                )
            });
        } catch (err) {
            console.log(err)
            CatchError("Error!")
        }
    };

    useEffect(() => {
        if (status === "authenticated") {
            Router.replace("/")
        }
    }, [status])

    return (
        <>
            <S.LogoBigImage src={LogoBig.src} />
            <S.RegisterWrap>
                <S.FormDiv>
                    <S.InfoDiv>
                        <Input register={register} errors={errors} title="아이디" name="nickName" divStyle={{ marginTop: "0" }} />
                        <ValueInput register={register} errors={errors} title="이름" name="name" minValue={2} maxValue={4} />
                        <ValueInput register={register} errors={errors} example="예) 클라우드보안과 1학년 1반 1번 - C1111" title="학번" name="studentId" minValue={5} maxValue={5} />
                        <Input register={register} errors={errors} title="비밀번호" name="password" type="password" />
                        <Input register={register} errors={errors} title="비밀번호 확인" name="passwordCheck" type="password" />
                    </S.InfoDiv>
                    <FormButton handleSubmit={handleSubmit} onValid={onValid} title="회원가입" />
                    <S.LinkButton >이미 계정이 있으신가요?
                        <Link href="/login">로그인</Link>
                    </S.LinkButton>
                </S.FormDiv>
            </S.RegisterWrap>
            <ToastContainer />
        </>
    )
}

export default RegisterPage;