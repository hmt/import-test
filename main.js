import * as client from '@svws-nrw/svws-openapi-ts';
const config = client.createConfiguration({
  baseServer: new client.ServerConfiguration("https://localhost", {}),
});

console.log(new client.SchuelerApi(config).getSchuelerListe({schema: 'svwsdb'}).then(res=>console.log(res)))