import type { SvelteComponent } from 'svelte'
import { Accessibility, Wifi } from 'lucide-svelte'

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
  ]
}
