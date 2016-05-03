/// <reference path='../../typescript/pg-promise' />

import * as pgPromise from 'pg-promise';

var pgp = pgPromise();
var db = pgp('connection');

var pq1 = new pgp.ParameterizedQuery('', []);
var pq2 = new pgp.ParameterizedQuery({text: ''});
var pq3 = new pgp.ParameterizedQuery(pq1);

var qf = new pgPromise.QueryFile('file');
var pq4 = new pgp.ParameterizedQuery({text: qf});

db.one(pq1);

db.one({
    name: '',
    text: ''
});

db.one({
    name: '',
    text: qf
});

var test1 = <typeof pgPromise.errors.ParameterizedQueryError>pq1.parse();
var file = test1.error.file;
