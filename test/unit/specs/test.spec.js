
import Hello from 'src/components/Hello'

describe('Hello.vue', () => {
  it('should contain', () => {
    expect(Hello.data).to.be.a('function')
    expect(Hello.data().msg).to.eql('ddd!')
  })
})
