# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
  # Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create!(first_name: 'Peter', last_name: 'Parker', email: 'spiderman@avengers.com',
            password: 'starwars', birthday: '4/1/2000', gender: 'male'
          )

User.create!(first_name: 'Steven', last_name: 'Rogers', email: 'captain_america@avengers.com',
            password: 'starwars', birthday: '7/4/1920', gender: 'male')

User.create!(first_name: 'Natalia', last_name: 'Romanova', email: 'black_widow@avengers.com',
            password: 'starwars', birthday: '11/22/1984', gender: 'female')

User.create!(first_name: 'Tony', last_name: 'Stark', email: 'iron_man@avengers.com',
            password: 'starwars', birthday: '5/29/1970', gender: 'male')

User.create!(first_name: 'Bruce', last_name: 'Banner', email: 'hulk@avengers.com',
            password: 'starwars', birthday: '12/18/1969', gender: 'male')

User.create!(first_name: 'Thor', last_name: 'Odinson', email: 'thor@avengers.com',
            password: 'starwars', birthday: '1/1/0000', gender: 'male')

User.create!(first_name: 'Henry', last_name: 'Pym', email: 'ant_man@avengers.com',
            password: 'starwars', birthday: '1/1/1900', gender: 'male')

User.create!(first_name: 'Stephen', last_name: 'Strange', email: 'doctor_strange@avengers.com',
            password: 'starwars', birthday: '1/1/1900', gender: 'male')

User.create!(first_name: 'Janet', last_name: 'Dyne', email: 'wasp@avengers.com',
            password: 'starwars', birthday: '1/1/1900', gender: 'woman')

Friend.create!(requestor: User.first, receiver: User.second, pending: true)
Friend.create!(requestor: User.first, receiver: User.third, pending: false)
Friend.create!(requestor: User.fourth, receiver: User.first, pending: false)
