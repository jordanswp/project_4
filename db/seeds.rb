# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'firstuser', email: '1@email.com', password: '111111', password_confirmation: '111111')

Category.create(name: 'Exercise')
Category.create(name: 'Learn')
Category.create(name: 'Health')
Category.create(name: 'Hobbies')
Category.create(name: 'Others')

Habit.create(title: 'Read book', duration: 21, completed: false, category_id: 2, user_id: 1)
Habit.create(title: 'Work out', duration: 21, completed: false, category_id: 1, user_id: 1)
Habit.create(title: 'Eat veggies', duration: 21, completed: false, category_id: 3, user_id: 1)
Habit.create(title: 'Fly kite', duration: 21, completed: false, category_id: 4, user_id: 1)
Habit.create(title: 'Do something', duration: 21, completed: false, category_id: 5, user_id: 1)
Habit.create(title: 'Hand stand', duration: 21, completed: false, category_id: 1, user_id: 1)