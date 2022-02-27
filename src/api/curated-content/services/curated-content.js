'use strict';

/**
 * curated-content service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::curated-content.curated-content');
