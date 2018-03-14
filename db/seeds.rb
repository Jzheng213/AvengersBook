# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
  # Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
# User.create!(first_name: 'Peter', last_name: 'Parker', email: 'spiderman@avengers.com',
#             password: 'starwars', birthday: '4/1/2000', gender: 'male'
#           )
#
# User.create!(first_name: 'Steven', last_name: 'Rogers', email: 'captian_america@avengers.com',
#             password: 'starwars', birthday: '7/4/1920', gender: 'male')
#
# User.create!(first_name: 'Natalia', last_name: 'Romanova', email: 'black_widow@avengers.com',
#             password: 'starwars', birthday: '11/22/1984', gender: 'female')
#
# User.create!(first_name: 'Tony', last_name: 'Stark', email: 'iron_man@avengers.com',
#             password: 'starwars', birthday: '5/29/1970', gender: 'male')

# User.create!(first_name: 'Bruce', last_name: 'Banner', email: 'hulk@avengers.com',
#             password: 'starwars', birthday: '12/18/1969', gender: 'male')
# thanos_bday = Date.parse('2000-01-01 BCE')
# User.create!(first_name: 'Thanos', last_name: 'The Dark Lord', email: 'thanos@avengers.com',
#             password: 'starwars', birthday: thanos_bday, gender: 'male')

Friend.create!(requestor: User.first, receiver: User.second, pending: true)
Friend.create!(requestor: User.first, receiver: User.third, pending: false)
Friend.create!(requestor: User.fourth, receiver: User.first, pending: false)
