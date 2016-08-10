'use strict';

module.exports = {
  createProject: function (params) {
    return this.post('infographics', params);
  },

  updateProject: function (id, params) {
    return this.put('infographics/' + id, params);
  },

  getProject: function (id, params = {}) {
    return this.get('infographics/' + id, params);
  },

  deleteProject: function (id, params = {}) {
    return this.delete('infographics/' + id, params);
  },

  getLibrary: function () {
    return this.get('infographics', {});
  },

  getUserLibrary: function (username) {
    return this.get('users/' + username + '/infographics', {});
  },

  getThemes: function () {
    return this.get('themes', {});
  }
};
