import { ApologiesDictionary } from "../config/apologies.dictionary";

export class ApologiesService {
    private mainWords = ApologiesDictionary.MAIN;
    private targetWords = ApologiesDictionary.TARGET;
    private additionalWords = ApologiesDictionary.ADDITIONAL;

    public generateApologies(): string[] {
        const stepOne = this.applyWords(this.mainWords, this.mainWords);
        const stepTwo = this.applyWords(stepOne, this.targetWords);
        const stepThree = this.applyWords(stepTwo, this.additionalWords);

        return stepThree
            .sort(() => Math.random() - 0.5)
            .slice(0, 1000);
    }

    private applyWords(wordsInital: string[], wordsToAppy: string[]): string[] {
        const newWords = wordsInital
            .reduce((acc, initialWord) => {
                const words =  wordsToAppy
                    .reduce((acc, currentWord) => {
                        if (initialWord === currentWord) {
                            return [...acc];
                        }

                        return [...acc, `${initialWord} ${currentWord}`];
                    }, []);

                return [...acc, ...words];
            }, []);

        return [...wordsInital, ...newWords];
    }
}
