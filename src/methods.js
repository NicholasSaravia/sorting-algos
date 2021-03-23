export default function createArray(amount){
    let array = [];
    for (let i = 0; i < amount; i++) {
        const num = Math.floor((Math.random() * 100) + 1);
        array.push({height: num, selected: i === 0});
    }
    return array;
}
