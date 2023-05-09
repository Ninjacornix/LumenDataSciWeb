import React from 'react';
import Graph from './Graph';
import '../styles/ContainerStyle.css'
import Player from './Player';

const instuments = ['Piano', 'Voice', 'Trumpet', 'Saxophone', 'Organ', 'Clarinet', 'Acoustic Guitar', 'Violin', 'Flute', 'Electric Guitar', 'Cello']

export default function Container({ render, data, sound }) {
    let info = []
    let chances = []
    if (data) {
        let array = data.data
        for (let index = 0; index < 11; index++) {
            let k = []
            for (let ind = 0; ind < array.length; ind++) {
                k.push(array[ind][index])
            }
            info.push(k)
        }

        for (let index = 0; index < info.length; index++) {
            let num = 0;
            for (let ind = 0; ind < info[index].length; ind++) {
                num += info[index][ind][1]
            }
            chances.push(Math.round(num / info[index].length * 100) / 100);
        }
    }

    return (
        <>
            {render ? null :
                <div>
                    <div className="Container">
                        <div className="Instruments">
                            <div className="Instrument">
                                <div className="InstrumentName">Instuments:</div>
                            </div>
                            {instuments.map((instrument) => (
                                <div className="Instrument" key={instrument.toString()}>
                                    <div className="InstrumentName" >{instrument}</div>
                                </div>
                            ))}
                        </div>
                        <div className="Graph">
                            {info.map((instrument) => (
                                <div key={instrument.toString()}>
                                    <Graph info={instrument} />
                                </div>
                            ))}
                        </div>
                        <div className="Results">
                            <div className="Instrument">
                                <div className="InstrumentName">Chances:</div>
                            </div>
                            {chances.map((chance) => (
                                <div className="Result" key={chance.toString()}>
                                    {chance > 0.8505 ? <div className="ResultName" style={{ color: 'green' }}>{chance * 100}%</div> :
                                        <div className="ResultName">{chance * 100}%</div>
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                    <Player soundData={sound} />
                </div>}
        </>
    )
}