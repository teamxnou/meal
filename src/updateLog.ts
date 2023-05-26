import type { SvelteComponent } from 'svelte'
import { Accessibility, Wifi, Sparkles, Grab } from 'lucide-svelte'

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
  ]
}
