var bracketData = require('../lib/index');
var assert = require('assert');

describe('Bracket Data', function () {
    it('should have correct data for ncaa-mens-basketball', function () {
        var b = bracketData({
            year: '2015',
            sport: 'nhl'
        });

        assert.strictEqual(b.constants.REGION_COUNT, 4);
        assert.strictEqual(b.constants.FINAL_ID, 'CF');
        assert.strictEqual(b.constants.ALL_IDS.join(' '), 'C P A M CF');
        assert.strictEqual(b.constants.FINAL_NAME, 'Conference Finals');
        assert.strictEqual(b.constants.UNPICKED_MATCH, 'X');
        assert.strictEqual(b.constants.TEAMS_PER_REGION, 4);
        assert.strictEqual(b.bracket.regions.C.teams[2], 'Chicago');
    });
});
