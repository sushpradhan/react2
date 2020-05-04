const ReadLater = async (id:any,news:any) => {
let newsReadLater=news.find((res:any)=>res.source.id==id);
    //console.log(user);
    let url = "http://localhost:3001/api/v1/news"
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newsReadLater)
    })

    return await response.json();
}

export default ReadLater;