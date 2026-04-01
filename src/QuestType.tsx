export interface QuestType {
  id: number;
  question: string;

  answerA?: string;
  answerB?: string;

  idNextQuestionA?: number;
  idNextQuestionB?: number;

  intro?: string;
  content?: string;

  training?: string;
  nutrition?: string;
  recovery?: string;
  learn?: string;

  answerlink1?: string;
  answerLink2?: string;
  answerLink3?: string;

  recoveryLink?: string;
  recoveryvid?: string;
  trainingLink?: string;

  imgFile?: string;
  imgFile2?: string;
  imgFile3?: string;

  imgFileName?: string;
  imgFileName2?: string;
  imgFileName3?: string;

  altTag1?: string;
  altTag2?: string;
  altTag3?: string;

  instaLink?: string;
  instaName?: string
  instaName2?: string;
  instaName3?: string;

  answerVideo?: string;
  answerInfo?: string;
}