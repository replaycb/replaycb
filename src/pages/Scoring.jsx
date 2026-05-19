const breakdown = [
    { category: "Vocals", points: 50 },
    { category: "Mix", points: 50 },
    { category: "Art", points: 50 },
    { category: "Animation", points: 50 },
];

export default function Scoring() {
    return (
        <main className="max-w-6xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
                <h1 className="text-6xl font-arose font-bold text-white mb-3">
                    Scoring
                </h1>
                <p className="text-white/70 text-lg max-w-2xl mx-auto font-arose">
                    More coming soon...
                </p>
            </div>

            <section className="flex flex-col items-center hidden">
                <h2 className="text-3xl font-arose text-white mb-6 border-b border-white/10 pb-3 w-full max-w-md">
                    Scoring <span className="text-main-100">Breakdown</span>
                </h2>
                <table className="w-full max-w-md border-collapse">
                    <tbody>
                        {breakdown.map(({ category, points }) => (
                            <tr
                                key={category}
                                className="border-b border-white/10"
                            >
                                <td className="py-3 text-white/80 font-medium">
                                    {category}
                                </td>
                                <td className="py-3 text-right text-white/80">
                                    {points}
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td className="pt-4 text-white font-bold text-lg">
                                Total
                            </td>
                            <td className="pt-4 text-right text-white font-bold text-lg">
                                200 Points
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="flex gap-4 mt-8">
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-4xl border  bg-main-100 text-white/80 hover:text-white hover:border-white/50 transition-colors text-xl font-arose"
                    >
                        Rubric
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-4xl border bg-main-100 text-white/80 hover:text-white hover:border-white/50 transition-colors text-xl font-arose"
                    >
                        Sample Scoresheet
                    </a>
                </div>
            </section>
        </main>
    );
}
