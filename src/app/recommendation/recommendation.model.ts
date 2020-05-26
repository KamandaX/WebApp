import { Type, Expose } from 'class-transformer';
import Phone from './phone/phone.model';

export default class Recommendation {
    @Type(() => Phone)
    @Expose({name: 'secondary_recommendations'})
    secondaryRecommendation: Phone[] = [];

    @Type(() => Phone)
    @Expose({name: 'main_recommendation'})
    mainRecommendation: Phone;
}
