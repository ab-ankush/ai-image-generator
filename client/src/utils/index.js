import FileSaver from "file-saver";
import { surpriseMePrompts } from "../constants";

export const getRandomPrompt = (prompt) => {
  const randomIdx = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIdx];
  // console.log(randomIdx);

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
};

export const downloadImage = async (_id, photo) => {
  FileSaver.saveAs(photo, `download-${_id}.jpeg`);
};
