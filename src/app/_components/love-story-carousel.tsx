'use client'
import * as React from 'react'
import { Card } from './ui/shad-card'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import Image from 'next/image'
import { cn } from '~/lib/utils'

export function LoveStoryCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Carousel
        setApi={setApi}
        className="w-full md:w-1/2"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {Array.from({ length: 12 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={`/vertical/ij_${index + 1}.jpeg`}
                      alt={`img-${index + 1}`}
                      fill
                    />
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
      <div className="hidden py-2 text-center text-sm text-muted-foreground md:flex">
        Bild {current} av {count}
      </div>
      <div className="mt-4 flex space-x-[5px] md:hidden">
        {Array.from({ length: 12 }).map((_, index) => (
          <span
            key={index}
            className={cn(
              'h-2 w-2 rounded-full bg-gray-300 transition-colors',
              {
                'bg-gray-500': index + 1 === current,
              },
            )}
          />
        ))}
      </div>
    </div>
  )
}
