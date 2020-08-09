const express = require('express');
const app = express();
const port = 5000;
const { Kayn, REGIONS } = require('kayn');
const kayn = Kayn('RGAPI-e9931ad8-ebde-4f69-b06f-11caefc970c1')({
    region: REGIONS.NORTH_AMERICA,
    apiURLPrefix: 'https://%s.api.riotgames.com',
    locale: 'en_US',
    debugOptions: {
        isEnabled: true,
        showKey: false,
    },
    requestOptions: {
        shouldRetry: true,
        numberOfRetriesBeforeAbort: 3,
        delayBeforeRetry: 1000,
        burst: true,
        shouldExitOn403: false,
    },
    cacheOptions: {
        cache: null,
        timeToLives: {
            useDefault: false,
            byGroup: {},
            byMethod: {},
        },
    },
});

const main = async kayn => {
    const championIdMap = await kayn.DDragon.Champion.listDataByIdWithParentAsId();
    const rotation = await kayn.Champion.Rotation.list();
    const {freeChampionIds, freeChampionIdsForNewPlayers} = rotation;
    let names = {
        freeNames: [],
        newNames: []
    };
    const freeArr = freeChampionIds.map(id => {
        let num = id.toString(10);
        return championIdMap.data[num].name;
    });
    const newArr = freeChampionIdsForNewPlayers.map(id => {
        let num = id.toString(10);
        return championIdMap.data[num].name;
    });
    names.freeNames = freeArr;
    names.newNames = newArr;
    return names;
};


app.get('/api', (req, res) => {
    main(kayn).then( names => {
        res.json(names);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});