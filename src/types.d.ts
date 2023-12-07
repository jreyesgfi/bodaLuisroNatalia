export interface Todo {
  id: TodoId
  title: TodoTitle
  completed: TodoCompleted
}
export type TodoId = string
export type TodoTitle = string
export type TodoCompleted = boolean

export type ListOfTodos = Todo[]

export type TodoFunction = (id: TodoId) => void

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

// Guest Data
export type GuestID = string;
export type AllergieType = string;

export interface GuestType {
  guestID: GuestID,
  groupID : string,
  firstName: string,
  lastName1: string,
  lastName2: string,
  confirmed: boolean,
  attendance: boolean,
  busGo: boolean,
  busBack: boolean,
  hotel: boolean,
  allergies: boolean,
  allergiesList?: AllergieType[],
  otherAllergy: string
}
type StageLabel = 'assistance' | 'busGo' | 'busBack' | 'busTime' | 'hotel' | 'allergies' | 'allergiesList' | 'finish';
export type ListOfGuests = GuestType[];


// Theme Components types
export type ChildrenType = (ReactNode[] | ReactNode);

export interface ControlItf{
  possibleTakeBack?: boolean;
  possibleNext?: boolean;
  changeGuest?: (next:boolean) => void;
  children?: (ReactNode[] | ReactNode);
}
export interface ControlPropsItf{
  ControlComponent: React.FC<ControlItf>;
  possibleTakeBack?: boolean;
  possibleNext?: boolean;
  changeGuest: (next:boolean) => void;
  children?: (ReactNode[] | ReactNode);
}


export interface OptionButtonItf {
  id?: string;
  text: string;
  iconSrc?: string;
}
export type LevelDictType = { [level: string]:number};
export type ChangeLevelsDictType = {[level:string]:((next:boolean)=>void)};
export interface LevelContextItf {
  levels: LevelDictType;
  changeLevels: ChangeLevelsDictType;
}

// Question / Answers
type RawState = typeof GuestType[keyof GuestType];
type Question = string;
type Answers = { text: string; value: boolean; }[]| { text: string; value: string; }[];
type FlowChangerAnswer = number[];
interface QuestionAnswerData {
  question: Question;
  answers: Answers;
  flowChangerAnswers: FlowChangerAnswer;
};


// Handle Functions
export type UpdateGuest = (guest:GuestType)=>GuestType;
export type HandleChange = (guestID:GuestID, value: typeof GuestType[keyof GuestType]) => void;
export type HandleSelection = (guestID:GuestID, property:StageLabel, rawState: RawState, answers: Answers, flowChangerAnswers: FlowChangerAnswer) => void;
export type HandleNumberChange = (e:React.ChangeEvent<HTMLInputElement>,guestID:GuestID) => void;
export type HandleNewAllergy = (id: GuestID, allergyTitle:AllergieType) => void;


//export type NumButtonSelected = number|null;