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
                        const newWords = [];

                        wordsArrays.forEach((curr: string[]) => {
                            curr.forEach(item => newWords.push(item));
                        });

                        res([...wordsInital, ...newWords]);
                    })
            }, 0);
        });
    }

    private firstLevel(wordsInital: string[], wordsToAppy: string[]): Promise<string[]>[] {
        const words: Promise<string[]>[] = [];

        wordsInital.forEach(initialWord => {
            const promise = new Promise<string[]>(res => {
                setTimeout(_ => {
                    const prom: Promise<string>[] = this.innerWords(wordsToAppy, initialWord);

                    Promise.all(prom)
                        .then((words: string[]) => res(words));
                }, 0);
            });

            words.push(promise);
        });

        return words;
    }

    private innerWords(wordsToAppy: string[], initialWord: string): Promise<string>[] {
        const words = [];

        wordsToAppy.forEach(currentWord => {
            const promise =  new Promise<string>(res => {
                setTimeout(_ => {
                    if (initialWord === currentWord) {
                        res(null);
                    }

                    res(`${initialWord} ${currentWord}`);
                }, 0);
            });

            words.push(promise);
        });

        return words;
    }
}
