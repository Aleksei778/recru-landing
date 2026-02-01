import ProfileTabs from "./_components/ProfileTabs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value; // или как у вас называется cookie с токеном

  if (!token) {
    redirect("/en/login");
  }

  try {
    // Запрос к вашему бэкенду для получения данных пользователя
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        cache: "no-store", // или "force-cache" в зависимости от нужд
      },
    );

    if (!response.ok) {
      redirect("/en/login");
    }

    const userData = await response.json();

    const isManager = userData.email === process.env.MANAGER_EMAIL;

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <main className="pt-24 pb-12 px-4 container mx-auto max-w-6xl">
          <ProfileTabs
            sessionUser={userData}
            userData={userData}
            isManager={isManager}
          />
        </main>
      </div>
    );
  } catch (error) {
    console.error("Error fetching user data:", error);
    redirect("/en/login");
  }
}
