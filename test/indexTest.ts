import { suite, test } from 'mocha-typescript'
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'

import { handler } from '../src/index'

chai.use(chaiAsPromised)
chai.should()
const expect = chai.expect
const assert = chai.assert

@suite('IndexHandler tests')
class IndexHandlerTest {

  @test('test(): ok')
  test() {
    assert.equal(1, 1)
  }
}
