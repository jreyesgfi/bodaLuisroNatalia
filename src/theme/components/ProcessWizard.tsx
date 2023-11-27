import { createContext, ReactNode, useState } from 'react';
import { ChangeLevelsDictType, LevelDictType } from '../../types';


interface Props {
    children?: (ReactNode[] | ReactNode);
    callbackFunction?: (...args: any[]) => void;
    levelName: string;                                                  // this level identifier
    parentLevels?: LevelDictType;                     // recovers the whole picture of the parents levels
    changeParentLevels?: ChangeLevelsDictType;    // brings one update function for each level
}
export const LevelContext = createContext<any>({});
export const ProcessWizard: React.FC<Props> =
    ({callbackFunction, children:children, levelName, changeParentLevels, parentLevels}) => {
        const [currentLevelNum, setCurrentLevelNum] = useState<number>(1);
        const [lastLevelChecked, setLastLevelChecked] = useState<number>(0);     
        const changeCurrentLevel = (next:boolean) => {
            //if (currentLevelNum > lastLevelChecked+1) { setLastLevelChecked(currentLevelNum-1);}
            setCurrentLevelNum(currentLevelNum + (next===false?-1:1));
            console.log(currentLevelNum);
            //callbackFunction?.();
        };
        const changeLevels: {[level:number]:((next:boolean)=>void)} = {
            ...changeParentLevels,
            [levelName]: (next:boolean) =>changeCurrentLevel(next),
        };
        // const changeLevel = (selectedLevel: keyof typeof changeLevels, next: boolean) => {// reducer function           
        //     changeLevels[selectedLevel](next);
        // }
        const levels = {
            ...parentLevels,
            [levelName]: currentLevelNum
        }
        const levelContext = {
            levels: levels,
            changeLevels: changeLevels
        }

        return (
            <LevelContext.Provider value={levelContext}>
                {children||null}
            </LevelContext.Provider>
        )
    }
