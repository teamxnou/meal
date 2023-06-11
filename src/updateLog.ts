import type { SvelteComponent } from 'svelte'
import { Accessibility, Wifi, Sparkles, Grab, CopyPlus, EggOff, ServerCrash, Image } from 'lucide-svelte'

interface Feature {
  Icon: typeof SvelteComponent
  title: string
  description: string
}

export const logs: Record<string, Feature[]> = {
  '1.3.0': [
    {
      Icon: Accessibility,
      title: '접근성 개선',
      description: '키보드, 스크린 리더 사용자도 쉽게 사용할 수 있도록 만들었어요.'
    },
    {
      Icon: Wifi,
      title: '데이터 사용량 감소',
      description: '메뉴 설문 결과를 가져오는 데 사용되는 데이터 사용량을 줄였어요.'
    }
  ],
  '1.4.0': [
    {
      Icon: Sparkles,
      title: '업데이트 소개',
      description: '기능이 추가될 때마다 이런 식으로 알려드려요.'
    },
    {
      Icon: Grab,
      title: '쓸어서 날짜 이동',
      description: '급식 화면에서 화면을 가로로 쓸면 이전/다음날로 이동할 수 있어요.'
    }
  ],
  '2.0.0': [
    {
      Icon: CopyPlus,
      title: '여러 학교 선택',
      description: '여러 학교를 선택해 빠르게 다른 학교의 급식을 확인할 수 있어요. 친구 학교도 등록해보세요!'
    },
    {
      Icon: EggOff,
      title: '알레르기 알림',
      description: '알레르기를 설정하고 메뉴에 알레르기가 포함되면 알려드려요.'
    },
    {
      Icon: ServerCrash,
      title: '급식 서버 점검 알림',
      description: '급식 서버가 점검 중일 때는 오류를 표시하는 대신 점검 중이라고 알려드려요.'
    },
    {
      Icon: Image,
      title: '재료 사진 출처',
      description: '이제 재료 사진의 출처를 볼 수 있어요. 재료 이름 오른쪽 ⓘ를 눌러보세요!'
    }
  ]
}
