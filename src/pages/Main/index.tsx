import {CSSProperties, memo, useCallback, useEffect, useRef} from 'react'
import {MainSC, MainSCProps} from 'pages/Main/styled'
import Text from 'components/ui/Text'
import {Row} from "components/ui/Grid";

export interface MainProps extends MainSCProps {
    className?: string
    style?: CSSProperties
}

const TEXT = 'showreel showreel showreel'

function Main({className, style}: MainProps) {
    const ref = useRef<HTMLDivElement>(null)

    const rotate = useCallback(() => {
        if (ref !== null) ref.current!.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
    }, [ref])

    useEffect(() => {
        window.addEventListener('scroll', rotate);
        return () => {
            window.addEventListener('scroll', rotate);
        };
    }, [ref, rotate]);

    return (
        <MainSC className={className} style={style}>
            <Text type={'title'} className={'text-center fullCycle'}>
                FULL-CYCLE<br/>
                EVENT AGENCY
            </Text>
            <Text type={"question"} className={'questions left'}>
                where?
            </Text>
            <Text type={"question"} className={'questions right'}>
                what?
            </Text>
            <Text type={"question"} className={'questions bottom'}>
                who?
            </Text>
            <div className="sun">
                <div className={'autorotate'}>
                    <div className={'rotate'} ref={ref}>
                        <Row className="circle">
                            {
                                Array.from(TEXT).map((letter, key) => <div className={'letter'}
                                                                           style={{transform: `rotate(${360 / TEXT.length * key}deg)`}}>
                                    <Text type={'scroll'} key={key}>{letter}</Text></div>)
                            }
                        </Row>
                    </div>
                </div>
            </div>

        </MainSC>
    )
}

export default memo(Main)
