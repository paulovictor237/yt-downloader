import fs from 'fs';
import ytdl from 'ytdl-core';

// @ts-ignore
const videoID = process.argv[2];
console.log('🐞 ~ videoID:', videoID);

let info = await ytdl.getInfo(videoID);
let format = ytdl.chooseFormat(info.formats, { quality: '134' });
console.log('Format found!', info.videoDetails.title);

// @ts-ignore
ytdl(videoID).pipe(fs.createWriteStream(`${info.videoDetails.title}.mp4`));
