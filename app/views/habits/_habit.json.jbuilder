json.extract! habit, :id, :title, :description, :completed, :user_id, :category_id, :created_at, :updated_at
json.url habit_url(habit, format: :json)
