import React from 'react'
import tempVideo from '../Assets/tempVideo.mp4'
import {COLOURS} from '../colours.js'

function NextThing() {
    return (
        <div className='w-full bg-[white] py-16 px-4'>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <video className='w-[500px] mx-auto my-4 ml-0' controls>
              <source src={tempVideo} type="video/mp4" />
            </video>
            <div className='flex flex-col justify-center'>
              <p className='text-[orange] font-bold uppercase md:text-4xl sm:text-3xl text:2xl'>Oh Jeremy Corbyn ... The Big Lie</p>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Watch the Trailer</h1>
              <p>
              In 2017, with the support of an extraordinary grassroots movement, British Labour Party leader Jeremy Corbyn came close to becoming prime minister. The establishment trembled. Britain stood on the threshold of huge political change. But within three years all, it seemed, was lost.  What happened and why? <br/><br/>Produced by award-winning radical film-maker Platform Films, with contributions from Jackie Walker, Ken Loach, Andrew Murray, Graham Bash and Moshe Machover, and narrated by Alexei Sayle, this feature-length documentary  film explores a dark and murky story of political deceit and outrageous antisemitic smears. It also uncovers the critical role played by current Labour leader, Keir Starmer and asks if the movement which backed Corbyn could rise again.
              </p>
            </div>
          </div>
        </div>
      );
    };

export default NextThing