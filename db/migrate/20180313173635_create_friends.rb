class CreateFriends < ActiveRecord::Migration[5.1]
  def change
    create_table :friends do |t|
      t.integer :requestor_id, null: false
      t.integer :receiver_id, null: false
      t.boolean :pending, null: false
    end

    add_index :friends, :requestor_id
    add_index :friends, :receiver_id
    add_index :friends, [:requestor_id, :receiver_id], unique: true
  end
end
