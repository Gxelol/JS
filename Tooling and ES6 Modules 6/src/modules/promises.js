function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("I'm tre promise");
            resolve();
        }, 200);
    });
}

export default async function () {
    await promise();
    console.log('Finished');
}