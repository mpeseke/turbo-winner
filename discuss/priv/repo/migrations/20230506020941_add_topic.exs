defmodule Discuss.Repo.Migrations.AddTopic do
  use Ecto.Migration

  def change do
    create table(:topics) do
      add :title, :string

      timestamps()
    end
  end
end
