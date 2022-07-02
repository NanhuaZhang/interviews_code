import type { NodeJS } from 'timers';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '@tencent/dui';
import { ReferenceDetailEvent } from '@tencent/smartsheet-sdk/workbench/reference-detail/pc/event';

interface ITimerProps {
    timer: number;
    // setTimer: (time: number) => void;
}

function Timer(props: ITimerProps) {
    const { timer } = props;

    const [time, setTime] = useState(timer);
    const timerRef = useRef<NodeJS.Timer | undefined>();

    const countFuc = () => {
        timerRef.current = setInterval(() => {
            setTime(time - 1);
        }, 1000);
    };

    const handleClickPauseButton = useCallback(() => {
        if (!timerRef.current) {
            countFuc();
            return;
        }
        clearInterval(timerRef.current);
        timerRef.current = null;
    }, [countFuc]);

    useEffect(() => {
        if (timerRef.current) {
            return;
        }
        countFuc();

        return () => clearInterval(timerRef.current);
    }, [time, countFuc]);

    useEffect(() => {
        ReferenceDetailEvent.onTimerChange.event((timer) => {
            setTime(timer);
        });

        return ReferenceDetailEvent.onTimerChange.dispose();
    }, []);

    return (
        <div>
            {time}
            <Button onClick={handleClickPauseButton}>Pause</Button>
        </div>
    );
}

function App() {
    return (
        <div>
            <Timer timer={100} />
            <Button
                onClick={() => {
                    // start
                    window.alert('This is a heavy computing job');
                    // end
                    // ReferenceDetailEvent.onTimerChange.fire(end-start)
                }}
            >
                Heavy action
            </Button>
        </div>
    );
}
