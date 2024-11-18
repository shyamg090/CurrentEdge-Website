import React from 'react'
import NewsPanelSide from './NewsPanelSide'
import NewsPanelMain from './NewsPanelMain'

const News = () => {
    return (
        <div className='mx-auto grid grid-cols-1 lg:grid-cols-3 grid-rows-none'>
            <div className='w-full flex flex-col items-center justify-start gap-4'>
                <NewsPanelSide />
                <NewsPanelSide />
            </div>
            <NewsPanelMain />
            <div className='w-full flex flex-col items-center justify-start gap-4'>
                <NewsPanelSide />
                <NewsPanelSide />
                <NewsPanelSide />
            </div>
        </div>
    )
}

export default News