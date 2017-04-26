/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/safetyresultss              ->  index
 * POST    /api/safetyresultss              ->  create
 * GET     /api/safetyresultss/:id          ->  show
 * PUT     /api/safetyresultss/:id          ->  update
 * DELETE  /api/safetyresultss/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Safetyresults from './safetyresults.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    if(entity) {
      var updated = _.merge(entity, updates);
      return updated.save()
        .then(updated => {
          return updated;
        });
    }
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Safetyresultss
export function index(req, res) {
  return Safetyresults.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Safetyresults from the DB
export function show(req, res) {
  return Safetyresults.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Safetyresults in the DB
export function create(req, res) {
  return Safetyresults.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Safetyresults in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Safetyresults.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Safetyresults from the DB
export function destroy(req, res) {
  return Safetyresults.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
