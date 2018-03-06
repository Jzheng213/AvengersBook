class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :phone_number
      t.date :birthday
      t.string :gender
      t.string :profile_pic_url
      t.string :cover_photo_url
      t.string :password_digest
      t.string :session_token
    end
    add_index :users, :email, unique: true
  end
end
