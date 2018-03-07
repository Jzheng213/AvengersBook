class AddNotNullToUsers < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :first_name, :string, null: false
    change_column :users, :last_name, :string, null: false
    change_column :users, :email, :string, null: false
    change_column :users, :birthday, :date, null: false
    change_column :users, :birthday, :string, null: false
    change_column :users, :password_digest, :string, null: false
    change_column :users, :session_token, :string, null: false
  end
end
