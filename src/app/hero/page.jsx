import { Button } from '@heroui/react'
import React from 'react'

function HeroPage() {
    return (
        <div className='container mx-auto pt-10'>
            <h1 className="text-3xl font-bold underline mb-4">Hero Page</h1>
            <div className="flex gap-4 flex-col">
                <Button>hero btn primary</Button>
                <Button variant="secondary">hero btn secondary</Button>
                <Button variant="tertiary">hero btn tertiary</Button>
                <Button variant="ghost">hero btn ghost</Button>
                <Button variant="link">hero btn link</Button>
                <Button variant="outline">hero btn outline</Button>
                <Button variant="unstyled">hero btn unstyled</Button>
                <Button variant="danger">hero btn danger</Button>


            </div>
        </div>
    )
}

export default HeroPage
