import type { NextPage } from 'next';

import { SectionTemplate } from '@/components';
import { TitleSection } from '@/components/TitleSection';
import {
  CTF1JPG,
  CTF2JPG,
  CTF3JPG,
  CTF4JPG,
  FieldIntroduce1JPG,
  FieldIntroduce2JPG,
  FieldIntroduce3JPG,
  Mentoring1JPG,
  Mentoring2JPG,
  Mentoring3JPG,
} from '@/assets';

import * as S from './styled';

const HistoryPage: NextPage = () => {
  return (
    <main style={{ width: '100%' }}>
      <TitleSection title="2022 관제 일지" />
      <SectionTemplate
        isSecondary
        shortDescription="보안관제에서는 이런걸 해요!"
        ShortDescriptionTextSecondary=" 2022/3/15~2022/4/19"
        title={<strong>분야별 소개</strong>}
        description={
          <>
            네트워크, 디지털 포렌식, 시스템, 암호학, 웹의 멘토들이 자신의 분야를 발표하며 자신의
            분야에 대해 알려주었어요. 이를 통해 보안에 대한 기본적인 분야들을 습득할 수 있었고, 각
            분야가 어떤식으로 운영되는지 알 수 있었어요.
          </>
        }
      >
        <S.FieldIntroduceImage
          src=""
          images={[FieldIntroduce1JPG.src, FieldIntroduce2JPG.src, FieldIntroduce3JPG.src]}
        />
      </SectionTemplate>
      <SectionTemplate
        shortDescription="보안관제에서는 이런 걸 해요!"
        ShortDescriptionTextSecondary=" 2022/3/15~2022/8/22"
        title={<strong>분야별 멘토링</strong>}
        description={
          <>
            분야별 멘토링을 통해 자신이 선택한 분야에 대해 선배들과 함께 공부하고, 문제를 풀어보며
            실력을 키워나갔어요. 멘토님들의 피드백을 통해 자신의 실력을 더욱 키울 수 있었어요.
          </>
        }
      >
        <S.MentoringImage
          src=""
          images={[Mentoring1JPG.src, Mentoring3JPG.src, Mentoring2JPG.src]}
        />
      </SectionTemplate>
      <SectionTemplate
        isSecondary
        shortDescription="보안관제에서는 이런걸 해요!"
        ShortDescriptionTextSecondary=" 2022/9/21~2022/11/27"
        title={<strong>교내/외 해킹 대회</strong>}
        description={
          <>
            1학기때 쌓아온 실력을 바탕으로 대회에서 실제 문제를 출제해보고, 부원들끼리 풀어보는
            시간을 가졌어요. 풀어보면서 서로가 서로의 문제를 봐주고, 피드백을 주고받는 시간을
            가졌어요. 마지막으로 외부강사님이 오셔서 문제를 봐주시고, 피드백을 주시는 시간을
            가졌어요.
          </>
        }
      >
        <S.ContestImage src="" images={[CTF1JPG.src, CTF2JPG.src, CTF3JPG.src, CTF4JPG.src]} />
      </SectionTemplate>
    </main>
  );
};

export default HistoryPage;
