import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleize'
})

export class TitleizePipe implements PipeTransform {
  static skipWords = ["of", "this", "in", "a", "or"]; //static content

  transform(title: string): string  {
    //console.log("running pipe", title);

    const skipWords=TitleizePipe.skipWords

    return title.replace(/\w[^-\s]*/g, (word, index: number) => { //g stands for global, will check all words in string. Get index of word position in string, in order to capitalize if first word in string. [^-\s] = don't want to match with spaces or -
      
      //console.log(word);
      if(index && skipWords.includes(word.toLowerCase())){ //index only has a value if not in the 0th position. the skipWord lowercase when the word matches in skipWords & not the first word in the string (index of not 0)
        //console.log(word);
        return word.toLowerCase();

      }
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
  }

}
