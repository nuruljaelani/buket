export const Testimonials = () => {
  return (
    <div className="layout-container flex h-full grow flex-col">
      <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          {/* Hero Section */}
          <div className="@container mb-12">
            <div className="@[480px]:p-4">
              <div
                className="relative flex min-h-[400px] flex-col gap-6 rounded-xl overflow-hidden bg-cover bg-center bg-no-repeat items-center justify-center p-8 group shadow-lg"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQgtWam_oa46mqXAE8vlrEvNvaDhAy3JCHGNb1UK6DnHNkBwYfYGU1TY7TOlPC0kVXin84uc8hPeyZkU5O8n-OecLhdqEF606P_k9UGMTSgYexTmPGMy1Sbs-VQccYpjeZwm8lBFX8OaGi6R8u07jrW0z1yCmOyFsVjJmAdCQOt2bwDT5o5riwzJwGBhHBCIYT7A_TCwCvL_PGBpcU21FvY0JBPgp9DEGb2w_mUOh_Mn8dMg0Hmzbq5nsHaMszX_BgDa5pVj8A-jQ")`,
                }}
              >
                <div className="flex flex-col gap-3 text-center z-10 max-w-2xl">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl drop-shadow-md">
                    Spreading Joy, One Bouquet at a Time
                  </h1>
                  <h2 className="text-white/90 text-base font-medium leading-relaxed md:text-lg">
                    See real smiles from our community. We love being part of
                    your special moments.
                  </h2>
                </div>
                <div className="flex gap-4 z-10 mt-2">
                  <button className="flex items-center justify-center rounded-xl h-12 px-6 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-all hover:scale-105 gap-2">
                    <span className="material-symbols-outlined text-[20px]">
                      add_a_photo
                    </span>
                    Share Your Moment
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-col items-center mb-8 gap-4">
            <h2 className="text-[#181113] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">
              Community Gallery
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <button className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-4 transition-all shadow-md">
                <span className="material-symbols-outlined text-[18px]">
                  grid_view
                </span>
                <span className="text-sm font-bold">All Moments</span>
              </button>
              {["Weddings", "Birthdays", "Anniversaries", "Just Because"].map(
                (tag) => (
                  <button
                    key={tag}
                    className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#3a2e32] border border-gray-200 dark:border-gray-700 px-4 hover:bg-gray-50 dark:hover:bg-[#4a3b40] transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      favorite
                    </span>
                    <span className="text-sm font-medium">{tag}</span>
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 px-4 md:px-0">
            {/* Mock items */}
            <GalleryItem
              title="Sarah's Anniversary"
              likes="124"
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuBmiitF_j7ospgN4sKt64ERwmJ08unILHVXrMdqnU4ccBRWNCnvW6IyEdwPrOCJuLDEBfnL7-JfkmFR4gz3lIlDNwCb056XV2E8F-uNWi4cDaK7bEx_uPk3DclqpsEMdeA4_prrnzuGE0qmqz8azJzpTvV-wjPog7tYGDok8JkwMOLbBEkTChfBnwKBV5tMUD0LmRUnysIEdqaXitwTyad-3L5hDeFOiPuoEspM7wM8umtU-gLmhYBUmf_pyneUj8-5hJCvttgENwo"
            />
            <GalleryItem
              title="The Big Day"
              likes="892"
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuBTa0vzLvl9XJeujHM70wtxKtOcWWvaliTFvTJ8CvYlMuc5J8f8B_YKTBqlkVhofTorU9tjogQOIp7S7OIzlmRVqJifyV7skFJph_Dnohz4MySxO_gu1iEgaLA2jrsw4j9giNvPAd2R9rglvJdQ94aJmKYMKmkfYVlGzNdo2z2teq7WaQdhF_Hay8sIUgQITbOzc6kCSwP2cXvr0lFwv9ChTa0rlREpuSRUT4tZUto2Zbf-cF5QmxnEubHvjT2418fqQa1uU4OzLWU"
              className="md:row-span-2 aspect-[3/4]"
            />
            <GalleryItem
              title="Just Because"
              likes="56"
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuDKB8LcL43E_hbt5VyG7pjhFQhoxRLJuoZO4XQCfIZte6yGJLYwG3RH92TwN_AZycpb3kiJsByg1n72Oz6qPepMp8ykAsZgNT61-SWiNX8xP_G2e5f-VgxVr8D_yuMXms7tCxD54VhXYoD_00kvUnaVzceQABrg2jZUL0e92Eha7yXwen27gREKPSA7_4_Rov7PjvemEKsPWqWX75ZpIFVdB2pgub-6esDmtiWzS9m-CF4ogU1AqeRFEigcY_-vsuVlubZqz3g9UOA"
            />
            <GalleryItem
              title="Summer Party"
              likes="210"
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuBWhaodx7jMJencmr1UKbX9-N8ATXZNMcoDxlVVds0HNZS49ehstS3GWNEJlIPSJXLtLMnkQCy0-V1OuscVWu6DxO0jZ2e8V-773xgqTLvYbcCnHiAi3RoahKJ_hZBi0YDecrFswftVAvd60zC1SVQG7p4dCKZBW3wNa1SucwqFn5Q9rvsicjYo0QHLkOrrQQwFM0v19cY87QrgW34GR4LybUTQXBvKnoEIyHn3vGfwAfeEk_flkBPl0nMLcpI1tulmqTIYYupwjwE"
            />
            <GalleryItem
              title="Mike & Jenny"
              likes="180"
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuCu1gmOxU4afcjlr_lKCk0FjeCBP0_JHBgZ5sYAAFwsMg9qlYx3W2qWYyCUDVxzIA02n-pggfW6XJ_9cnBXNWtyM_H9t7WQqJ07AWvCj_KFuSP8JGvOh6s_bhpdInswSiHyy0d-2LuGqeZEXPSrodAHITaLBs7m7We9L9fMUGlrg_TGQR7vHVtxzvdxCTjzDh2SqOPKhh_SxydtIJ9g-079B6zHceJPF60xCuefpN8spUCNDk93luAYSchTyymnrgd6bH5XHYPhhZc"
            />
            <GalleryItem
              title="Little Lily"
              likes="405"
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuD4uBeBCr5FeIUfYp8b6aldAk8uFtOMBqnMyL_9lUC58kFiVUPqjzBxWGpesUODtirk5vlc6w_wO7_d1VnFS43SNe6O8VYjXN90Dm8GMjD0mcfUd3NbXNbn6kfdPAS5zfzgKFbxXFjX2TpYAxpZN8miKuHLvdI1F8ntdGKJntpWKCBO-vOqR0isHOT0FGMN5KZ93nGj-ERLcS5PxoD1QjuN_it7QLS447OV05YNPIOXhVzGXAkhMMAw6MeJk-QEHxxsTSmnknudqX4"
            />
          </div>

          {/* Reviews Section */}
          <div className="mb-10 px-4 md:px-0">
            <div className="flex flex-col items-center mb-10 text-center">
              <h2 className="text-[#181113] dark:text-white text-3xl font-extrabold leading-tight tracking-[-0.015em] mb-3">
                Loved by Locals
              </h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-lg">
                Don't just take our word for it. Read what our wonderful
                community has to say about their blooming experiences.
              </p>
            </div>
            {/* Masonry Grid for Reviews */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              <ReviewCard
                name="Sarah Jenkins"
                text="The roses lasted for two whole weeks! Absolutely stunning arrangement and the delivery was right on time. My wife couldn't stop smiling."
                img="https://lh3.googleusercontent.com/aida-public/AB6AXuATqXYkBlXCnUyGtjyqyG9tJb9NXFH7WH8yFyqEmNCWYRCMXoSBttNEp674kazhumLbivU3h6qWZVrWs-xCMFapN5_FInGWeJhWmLrEqiDKq68DivJmXpDIriZ582omFXDcQcteKzwXn4dPvQ-GQWh13PT6gH2com7imyRg4_mx8qzvwcQwjxiNgoXKypmV7HavJK5WBtSCL5LhRmYxDaz1vpEHpWgZmrE3PAvbFjPUL5zuQoU3gEdtGE6H6RjDZp3twsFlVOeDTrI"
              />
              <ReviewCard
                name="Emily Rodriguez"
                text="Look how big this arrangement is! It completely transformed our dining table for the party. Highly recommend the 'Spring Awakening' collection."
                img="https://lh3.googleusercontent.com/aida-public/AB6AXuCi-pvbOfbOCshM5FZPF1NS896Kal1HmxoLn98XbNuzqzmH3mhQqGqBvA6pjBmDszTXT4ZMS7Zh9E8ZIZNedvluOFUASu0-MgzAeeKrw7SktRLB7gqY26VkdAJ1kTvxVreO86zkG1bY9EzF36qMCAAYQNm0Cg2m78uageVuR-3WqOUI3usfEyNo2zVJsPRFmJ7WdTrlf49sziuZb3UZ0dmMwA9BGjilEptCC23bsaoM7KjAvFURX_LTCcVTfsYxS7D3CQ9A2t3WnY4"
                photo="https://lh3.googleusercontent.com/aida-public/AB6AXuBOF964UtO0-ZTrfweuNp4F7VRTTgdtNbZuE-KH3hILfGo6pvowRwfyTNOVf4cxWjYGvLyOr-FruH-Q4GCBWlnBma5jcBfVzdf38neiUduDe_2H9VBRHoVfhu_WsErphjhLy4hN-tVkn9zqjuP1kXh1iCxkhQVV6MDj6cJCrRCY0qaKUtXvrG9FVaHWh7otwC1LWce99-lE5e18y_aKipGfjP1Y4FGk23Pyr6jE7qI79JrvJf_WuzYZLqdFLNsDsmVFqr4_7bG9A84"
              />
              <ReviewCard
                name="Mike Thompson"
                text="Best delivery service I've ever used. My mom was crying happy tears when she received them for her 60th birthday. The handwritten note was a lovely touch."
                initials="MT"
              />
              {/* Add more reviews as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GalleryItem = ({
  title,
  likes,
  img,
  className = "aspect-square",
}: {
  title: string;
  likes: string;
  img: string;
  className?: string;
}) => (
  <div
    className={`group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 cursor-pointer ${className}`}
  >
    <img
      alt={title}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      src={img}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
      <p className="text-white font-bold">{title}</p>
      <div className="flex items-center gap-1 text-white/90 text-xs">
        <span className="material-symbols-outlined text-[14px]">favorite</span>{" "}
        {likes} likes
      </div>
    </div>
  </div>
);

const ReviewCard = ({
  name,
  text,
  img,
  photo,
  initials,
}: {
  name: string;
  text: string;
  img?: string;
  photo?: string;
  initials?: string;
}) => (
  <div className="break-inside-avoid mb-6 bg-white dark:bg-[#2a1d21] p-6 rounded-xl shadow-sm border border-gray-100 dark:border-[#3a2e32] hover:shadow-md transition-shadow">
    <div className="flex gap-1 text-amber-400 mb-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className="material-symbols-outlined text-[20px] fill-current"
        >
          star
        </span>
      ))}
    </div>
    {photo && (
      <div className="mb-4 rounded-lg overflow-hidden h-40">
        <img
          alt="Customer photo"
          className="w-full h-full object-cover"
          src={photo}
        />
      </div>
    )}
    <p className="text-[#181113] dark:text-gray-200 text-base leading-relaxed mb-4">
      "{text}"
    </p>
    <div className="flex items-center gap-3">
      <div className="size-10 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
        {img ? (
          <img alt={name} className="w-full h-full object-cover" src={img} />
        ) : (
          <span className="text-primary font-bold">{initials}</span>
        )}
      </div>
      <div>
        <p className="font-bold text-sm text-[#181113] dark:text-white">
          {name}
        </p>
        <div className="flex items-center gap-1 text-green-600 dark:text-green-400 text-xs">
          <span className="material-symbols-outlined text-[14px]">
            verified
          </span>{" "}
          Verified Buyer
        </div>
      </div>
    </div>
  </div>
);
