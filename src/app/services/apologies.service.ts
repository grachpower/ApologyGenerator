import { ApologiesDictionary } from "../config/apologies.dictionary";

export class ApologiesService {
    private mainWords = ApologiesDictionary.MAIN;
    private targetWords = ApologiesDictionary.TARGET;
    private additionalWords = ApologiesDictionary.ADDITIONAL;

    public generateApologies(): Promise<string[]> {
        return new Promise(res => {
            setTimeout(() => {
               const apologies = this.applyWords(this.mainWords, this.mainWords)
                   .then(stepOne => this.applyWords(stepOne, this.targetWords))
                   .then(stepTwo => this.applyWords(stepTwo, this.additionalWords))
                   .then(stepThree => stepThree
                       .sort(() => Math.random() - 0.5)
                       .slice(0, 1000));
               res(apologies);
            });
        });
    }

    private  applyWords(wordsInital: string[], wordsToAppy: string[]): Promise<string[]> {
        return new Promise(res => {
            setTimeout(() => {
                Promise.all(this.firstLevel(wordsInital, wordsToAppy))
                    .then((wordsArrays: string[][]) => {
                        const newWords = wordsArrays
                            .reduce((acc: string[], curr: string[]) => [...acc, ...curr], []);

                        res([...wordsInital, ...newWords]);
                    })
            }, 0);
        });
    }

    private firstLevel(wordsInital: string[], wordsToAppy: string[]): Promise<string[]>[] {
        return wordsInital
            .reduce((acc, initialWord) => {
                return [...acc, this.innerWords(wordsToAppy, initialWord)];
            }, []);
    }

    private innerWords(wordsToAppy: string[], initialWord: string): Promise<string[]> {
        return new Promise(res => {
            setTimeout(() => {
               const words = wordsToAppy
                   .reduce((acc, currentWord) => {
                       if (initialWord === currentWord) {
                           return [...acc];
                       }

                       return [...acc, `${initialWord} ${currentWord}`];
                   }, []);

               res(words);
            }, 0)
        })
    }
}
