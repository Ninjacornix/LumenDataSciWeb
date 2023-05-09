import React from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

import '../styles/BackgroundStarsStyle.css'

export default function RotatingStars() {
    const mymesh = React.useRef()

    useFrame(({clock}) => {
        mymesh.current.rotation.x = clock.getElapsedTime() * 0.03
        mymesh.current.rotation.y = clock.getElapsedTime() * 0.03
    })

    useThree(({camera}) => {
        camera.position.z = -300
    })

    return (
        <mesh ref={mymesh} className="StarsStyle">
            <Stars/>
            <OrbitControls />
        </mesh>
    )
}