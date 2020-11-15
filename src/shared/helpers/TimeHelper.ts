export class TimeHelper {
    static convertMintuesToSeconds(value: number): number {
        const seconds = value * 60;
        console.log(`TimeHelper.convertMintuesToSeconds(${value})`);
        console.log(`Result: ${seconds}`);
        // const hours = Math.floor((temp / 3600));
        // const minutes: number = Math.floor((temp / 60) / 60);
        return seconds;
    }
}
