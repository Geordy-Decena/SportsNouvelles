import React, { useState, useEffect, Fragment } from 'react';
import '../data.css';
import { Transition } from 'react-transition-group'
import Football from '../images/football.png'
import Basketball from '../images/basketball.png'
import Hockey from '../images/hockey.png'
import Baseball from '../images/baseball.png'

var check = true
var index = 0

function Data() {

    const [isData, setData] = useState([])
    const [isConfiguredData, setConfiguredData] = useState({
        headerNBA: [],
        headerNFL: [],
        headerNHL: [],
        headerMLB: [],
        headerSOCCER: [],
        imageNBA: [],
        imageNFL: [],
        imageNHL: [],
        imageMLB: [],
        imageSOCCER: [],
        timeNBA: [],
        timeNFL: [],
        timeNHL: [],
        timeMLB: [],
        timeSOCCER: [],
    })

    const [isSport, setSport] = useState({
        nba: "nbaSet",
        nfl: "nfl",
        nhl: "nhl",
        mlb: "mlb",
        soccer: "soccer"
    })

    useEffect(() => {
        fetch('/api').then(
            res => res.json()
        ).then(data => setData(data))
    }, [])

    function setHeader(header, sport) {
        var tempHeader = []
        var count = 0
        var sHeader = String(header)
        let temp = ""
        check = true
        index = 0

        for (let x = 0; x < 10; x++) {
            check = true
            count = 0
            temp = ""
            while (check) {
                if (sHeader[index] == '`') {
                    check = false
                }
                if (count > 500) {
                    check = false
                }
                else {
                    temp += sHeader[index]
                    index++
                    count++
                }
            }
            let temp2 = temp.replace(/undefined/g, "")
            let temp3 = temp2.replace("`", "")
            if (sHeader[index - 2] != '.') {
                temp3 += "..."
            }
            else {
                temp3 += ".."
            }
            tempHeader.push(temp3)
        }
        if (sport === 0) {
            isConfiguredData.headerNBA = tempHeader
        }
        if (sport === 1) {
            isConfiguredData.headerNFL = tempHeader
        }
        if (sport === 2) {
            isConfiguredData.headerNHL = tempHeader
        }
        if (sport === 3) {
            isConfiguredData.headerMLB = tempHeader
        }
        if (sport === 4) {
            isConfiguredData.headerSOCCER = tempHeader
        }
        console.log("TEMP HEADER", isConfiguredData)
    }

    function setImage(image, sport) {
        var tempImage = []
        var count = 0
        var sImage = String(image)
        let temp = ""
        check = true
        index = 0

        for (let x = 0; x < 10; x++) {
            check = true
            count = 0
            temp = ""
            while (check) {
                if (sImage[index] == '`') {
                    check = false
                }
                if (count > 500) {
                    check = false
                }
                else {
                    temp += sImage[index]
                    index++
                    count++
                }
            }
            let temp2 = temp.replace(/undefined/g, "")
            let temp3 = temp2.replace("`", "")
            tempImage.push(temp3)
        }

        if (sport === 0) {
            isConfiguredData.imageNBA = tempImage
        }
        if (sport === 1) {
            isConfiguredData.imageNFL = tempImage
        }
        if (sport === 2) {
            isConfiguredData.imageNHL = tempImage
        }
        if (sport === 3) {
            isConfiguredData.imageMLB = tempImage
        }
        if (sport === 4) {
            isConfiguredData.imageSOCCER = tempImage
        }
    }

    function setTime(time, sport) {
        var tempTime = []
        var count = 0
        var sTime = String(time)
        let temp = ""
        check = true
        index = 0

        for (let x = 0; x < 10; x++) {
            check = true
            count = 0
            temp = ""
            while (check) {
                if (sTime[index] == '`') {
                    check = false
                }
                if (count > 500) {
                    check = false
                }
                else {
                    temp += sTime[index]
                    index++
                    count++
                }
            }
            let temp2 = temp.replace(/undefined/g, "")
            let temp3 = temp2.replace("`", "")
            tempTime.push(temp3)
        }

        if (sport === 0) {
            isConfiguredData.timeNBA = tempTime
        }
        if (sport === 1) {
            isConfiguredData.timeNFL = tempTime
        }
        if (sport === 2) {
            isConfiguredData.timeNHL = tempTime
        }
        if (sport === 3) {
            isConfiguredData.timeMLB = tempTime
        }
        if (sport === 4) {
            isConfiguredData.timeSOCCER = tempTime
        }
    }

    function setLink(link, sport) {
        var tempLink = []
        var count = 0
        var sLink = String(link)
        let temp = ""
        check = true
        index = 0

        for (let x = 0; x < 10; x++) {
            check = true
            count = 0
            temp = ""
            while (check) {
                if (sLink[index] == '`') {
                    check = false
                }
                if (count > 500) {
                    check = false
                }
                else {
                    temp += sLink[index]
                    index++
                    count++
                }
            }
            let temp2 = temp.replace(/undefined/g, "")
            let temp3 = temp2.replace("`", "")
            tempLink.push(temp3)
        }

        if (sport === 0) {
            isConfiguredData.linkNBA = tempLink
        }
        if (sport === 1) {
            isConfiguredData.linkNFL = tempLink
        }
        if (sport === 2) {
            isConfiguredData.linkNHL = tempLink
        }
        if (sport === 3) {
            isConfiguredData.linkMLB = tempLink
        }
        if (sport === 4) {
            isConfiguredData.linkSOCCER = tempLink
        }
    }

    function redirect(page) {
        window.location.href = page;
    }

    function switchSport(sport) {
        if (sport === 0) {
            console.log("SWITCH NBA")
            setSport({ ...isSport, nba: "nbaSet", nfl: "nfl", nhl: "nhl", mlb: "mlb", soccer: "soccer", sportPrev: 0 })
        }
        if (sport === 1) {
            console.log("SWITCH NFL")
            setSport({ ...isSport, nfl: "nflSet", nhl: "nhl", nba: "nba", mlb: "mlb", soccer: "soccer", sportPrev: 1 })
        }
        if (sport === 2) {
            console.log("SWITCH NHL")
            setSport({ ...isSport, nhl: "nhlSet", nfl: "nfl", nba: "nba", mlb: "mlb", soccer: "soccer", sportPrev: 2 })
        }
        if (sport === 3) {
            console.log("SWITCH MLB")
            setSport({ ...isSport, mlb: "mlbSet", nfl: "nfl", nhl: "nhl", nba: "nba", soccer: "soccer", sportPrev: 3 })
        }
        if (sport === 4) {
            console.log("SWITCH SOCCER")
            setSport({ ...isSport, soccer: "soccerSet", nfl: "nfl", nhl: "nhl", mlb: "mlb", nba: "nba", sportPrev: 4 })
        }
    }

    return (
        <Fragment>
            {setHeader(isData.headerNBA, 0)}
            {setImage(isData.imageNBA, 0)}
            {setTime(isData.timeNBA, 0)}
            {setLink(isData.linkNBA, 0)}
            {setHeader(isData.headerNFL, 1)}
            {setImage(isData.imageNFL, 1)}
            {setTime(isData.timeNFL, 1)}
            {setLink(isData.linkNFL, 1)}
            {setHeader(isData.headerNHL, 2)}
            {setImage(isData.imageNHL, 2)}
            {setTime(isData.timeNHL, 2)}
            {setLink(isData.linkNHL, 2)}
            {setHeader(isData.headerMLB, 3)}
            {setImage(isData.imageMLB, 3)}
            {setTime(isData.timeMLB, 3)}
            {setLink(isData.linkMLB, 3)}
            {setHeader(isData.headerSOCCER, 4)}
            {setImage(isData.imageSOCCER, 4)}
            {setTime(isData.timeSOCCER, 4)}
            {setLink(isData.linkSOCCER, 4)}

            <div className="background">
                <img className="footballImg" src={Football}></img>
                <img className="basketballImg" src={Basketball}></img>
                <img className="hockeyImg" src={Hockey}></img>
                <img className="baseballImg" src={Baseball}></img>
            </div>
            <div className="title1">Sports</div>
            <div className="title2">Nouvelles</div>
            <div className="subTitle">Get up to date wuith</div>
            <div className="sportsHeader">
                <h1 onClick={() => switchSport(0)}>NBA</h1>
                <h2 onClick={() => switchSport(1)} > NFL</h2>
                <h3 onClick={() => switchSport(2)}> NHL</h3>
                <h4 onClick={() => switchSport(3)}> MLB</h4>
                <h5 onClick={() => switchSport(4)}> SOCCER</h5>
                {(isSport.nba === "nbaSet") && (
                    <div className="nbaLineOn"></div>
                )}
                {(isSport.nfl === "nflSet") && (
                    <div className="nflLineOn"></div>
                )}
                {(isSport.nhl === "nhlSet") && (
                    <div className="nhlLineOn"></div>
                )}
                {(isSport.mlb === "mlbSet") && (
                    <div className="mlbLineOn"></div>
                )}
                {(isSport.soccer === "soccerSet") && (
                    <div className="soccerLineOn"></div>
                )}
            </div>
            <div className="newsContainer">
            </div>
            <div className="data">
                {(isSport.nba === "nbaSet") && (
                    <Transition
                        timeout={3000}
                        in={true}
                        appear
                    >{(status) => (
                        <div className={`nbaSet nbaSet-${status}`}>
                            {isConfiguredData.headerNBA.map((data, index) => {
                                return (
                                    <Fragment>
                                        <div className="headerNBA" onClick={() => redirect(isConfiguredData.linkNBA[index])}>
                                            <img src={isConfiguredData.imageNBA[index]} className="imageNBA"></img>
                                            <h1>{data}</h1>
                                            <h2>{isConfiguredData.timeNBA[index]}</h2>
                                        </div>
                                    </Fragment>
                                )
                            })}
                        </div>
                    )}
                    </Transition>
                )}
                {(isSport.nba !== "nbaSet") && (
                    <Transition
                        timeout={3000}
                        in={true}
                        appear
                    >{(status) => (
                        <div className={`nba nba-${status}`}>
                            {isConfiguredData.headerNBA.map((data, index) => {
                                return (
                                    <Fragment>
                                        <div className="headerNBA" onClick={() => redirect(isConfiguredData.linkNBA[index])}>
                                            <img src={isConfiguredData.imageNBA[index]} className="imageNBA"></img>
                                            <h1>{data}</h1>
                                            <h2>{isConfiguredData.timeNBA[index]}</h2>
                                        </div>
                                    </Fragment>
                                )
                            })}
                        </div>
                    )}
                    </Transition>
                )}
                {(isSport.nfl === "nflSet") && (
                    <Transition
                        timeout={3000}
                        in={true}
                        appear
                    >{(status) => (
                        <div className={`nflSet nflSet-${status}`}>
                            {isConfiguredData.headerNFL.map((data, index) => {
                                return (
                                    <Fragment>
                                        <div className="headerNBA" onClick={() => redirect(isConfiguredData.linkNFL[index])}>
                                            <img src={isConfiguredData.imageNFL[index]} className="imageNBA"></img>
                                            <h1>{data}</h1>
                                            <h2>{isConfiguredData.timeNFL[index]}</h2>
                                        </div>
                                    </Fragment>
                                )
                            })}
                        </div>
                    )}
                    </Transition>
                )}
                {(isSport.nfl !== "nflSet") && (
                    <Transition
                        timeout={3000}
                        in={true}
                        appear
                    >{(status) => (
                        <div className={`nfl nfl-${status}`}>
                            {isConfiguredData.headerNFL.map((data, index) => {
                                return (
                                    <Fragment>
                                        <div className="headerNBA" onClick={() => redirect(isConfiguredData.linkNFL[index])}>
                                            <img src={isConfiguredData.imageNFL[index]} className="imageNBA"></img>
                                            <h1>{data}</h1>
                                            <h2>{isConfiguredData.timeNFL[index]}</h2>
                                        </div>
                                    </Fragment>
                                )
                            })}
                        </div>
                    )}
                    </Transition>
                )}
                {(isSport.nhl === "nhlSet") && (
                    <Transition
                        timeout={3000}
                        in={true}
                        appear
                    >{(status) => (
                        <div className={`nhlSet nhlSet-${status}`}>
                            {console.log("NHLSET")}
                            {isConfiguredData.headerNHL.map((data, index) => {
                                return (
                                    <Fragment>
                                        <div className="headerNBA" onClick={() => redirect(isConfiguredData.linkNHL[index])}>
                                            <img src={isConfiguredData.imageNHL[index]} className="imageNBA"></img>
                                            <h1>{data}</h1>
                                            <h2>{isConfiguredData.timeNHL[index]}</h2>
                                        </div>
                                    </Fragment>
                                )
                            })}
                        </div>
                    )}
                    </Transition>
                )}
                {(isSport.nhl !== "nhlSet") && (
                    <Transition
                        timeout={3000}
                        in={true}
                        appear
                    >{(status) => (
                        <div className={`nhl nhl-${status}`}>
                            {isConfiguredData.headerNHL.map((data, index) => {
                                return (
                                    <Fragment>
                                        <div className="headerNBA" onClick={() => redirect(isConfiguredData.linkNHL[index])}>
                                            <img src={isConfiguredData.imageNHL[index]} className="imageNBA"></img>
                                            <h1>{data}</h1>
                                            <h2>{isConfiguredData.timeNHL[index]}</h2>
                                        </div>
                                    </Fragment>
                                )
                            })}
                        </div>
                    )}
                    </Transition>
                )}
                {(isSport.mlb === "mlbSet") && (
                    <Transition
                        timeout={3000}
                        in={true}
                        appear
                    >{(status) => (
                        <div className={`mlbSet mlbSet-${status}`}>
                            {isConfiguredData.headerMLB.map((data, index) => {
                                return (
                                    <Fragment>
                                        <div className="headerNBA" onClick={() => redirect(isConfiguredData.linkMLB[index])}>
                                            <img src={isConfiguredData.imageMLB[index]} className="imageNBA"></img>
                                            <h1>{data}</h1>
                                            <h2>{isConfiguredData.timeMLB[index]}</h2>
                                        </div>
                                    </Fragment>
                                )
                            })}
                        </div>
                    )}
                    </Transition>
                )}
                {(isSport.mlb !== "mlbSet") && (
                    <Transition
                        timeout={3000}
                        in={true}
                        appear
                    >{(status) => (
                        <div className={`mlb mlb-${status}`}>
                            {isConfiguredData.headerMLB.map((data, index) => {
                                return (
                                    <Fragment>
                                        <div className="headerNBA" onClick={() => redirect(isConfiguredData.linkMLB[index])}>
                                            <img src={isConfiguredData.imageMLB[index]} className="imageNBA"></img>
                                            <h1>{data}</h1>
                                            <h2>{isConfiguredData.timeMLB[index]}</h2>
                                        </div>
                                    </Fragment>
                                )
                            })}
                        </div>
                    )}
                    </Transition>
                )}
                {(isSport.soccer === "soccerSet") && (
                    <Transition
                        timeout={3000}
                        in={true}
                        appear
                    >{(status) => (
                        <div className={`soccerSet soccerSet-${status}`}>
                            {isConfiguredData.headerSOCCER.map((data, index) => {
                                return (
                                    <Fragment>
                                        <div className="headerNBA" onClick={() => redirect(isConfiguredData.linkSOCCER[index])}>
                                            <img src={isConfiguredData.imageSOCCER[index]} className="imageNBA"></img>
                                            <h1>{data}</h1>
                                            <h2>{isConfiguredData.timeSOCCER[index]}</h2>
                                        </div>
                                    </Fragment>
                                )
                            })}
                        </div>
                    )}
                    </Transition>
                )}
                {(isSport.soccer !== "soccerSet") && (
                    <Transition
                        timeout={3000}
                        in={true}
                        appear
                    >{(status) => (
                        <div className={`soccer soccer-${status}`}>
                            {isConfiguredData.headerSOCCER.map((data, index) => {
                                return (
                                    <Fragment>
                                        <div className="headerNBA" onClick={() => redirect(isConfiguredData.linkSOCCER[index])}>
                                            <img src={isConfiguredData.imageSOCCER[index]} className="imageNBA"></img>
                                            <h1>{data}</h1>
                                            <h2>{isConfiguredData.timeSOCCER[index]}</h2>
                                        </div>
                                    </Fragment>
                                )
                            })}
                        </div>
                    )}
                    </Transition>
                )}
            </div>
        </Fragment>
    );
}

export default Data;