import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {NavamidApp} from '../app/navamid.component';

beforeEachProviders(() => [NavamidApp]);

describe('App: Navamid', () => {
  it('should have the `defaultMeaning` as 42', inject([NavamidApp], (app: NavamidApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([NavamidApp], (app: NavamidApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

