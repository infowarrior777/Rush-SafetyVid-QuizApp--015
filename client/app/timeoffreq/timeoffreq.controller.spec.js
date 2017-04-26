'use strict';

describe('Component: TimeoffreqComponent', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var TimeoffreqComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    TimeoffreqComponent = $componentController('timeoffreq', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
