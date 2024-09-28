import Image from 'next/image'
import React from 'react'

const TopCompanies = () => {
    return (
        <div>
            <h3>
                Top companies offer this course to their employees
            </h3>
            <p>This course was selected for our collection of top-rated courses trusted by businesses worldwide. <span>Learn more</span></p>
            <Image src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg" width={60} height={60}/>
            <Image src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" width={60} height={60} />
            <Image src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg"  width={60} height={60}/>
            <Image src="" />
            <Image src="" />
        </div>
    )
}

export default TopCompanies