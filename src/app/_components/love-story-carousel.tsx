'use client'
import * as React from 'react'
import { Card } from './ui/shad-card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import Image from 'next/image'

export function LoveStoryCarousel() {
  return (
    <Carousel className="w-full md:w-1/2" opts={{ loop: true }}>
      <CarouselContent>
        {Array.from({ length: 11 }).map((_, index) => (
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
  )
}
