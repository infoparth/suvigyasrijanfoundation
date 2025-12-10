import { Download, FileText, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import ImageMarquee from "@/components/ImageMarquee";
import { useExamStatus } from "@/hooks/useExamStatus";
import { Skeleton } from "@/components/ui/skeleton";
import { marqueeImages } from "@/images/imageData";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { examStatus, loading } = useExamStatus();
  const { t } = useLanguage();

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            <Skeleton className="h-64 w-full mb-8" />
            <div className="grid md:grid-cols-2 gap-6">
              <Skeleton className="h-48" />
              <Skeleton className="h-48" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const phase = examStatus?.phase ?? 0;
  const phaseLabel = examStatus?.phaseLabel;
  const examDate = examStatus?.examDate ?? new Date().toISOString();
  const announcement = examStatus?.announcement ?? "";
  const questionPaperURL = examStatus?.questionPaperURL;
  const instructionsURL = examStatus?.instructionsURL;
  const resultsURL = examStatus?.resultsURL;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <AnnouncementBanner
        announcement={announcement}
        className="sticky top-16 z-40"
      />
      {/* Image Marquee Section */}
      <ImageMarquee
        images={marqueeImages}
        speed={30}
        direction="left"
        pauseOnHover={true}
        className="my-2"
        altText={t("home.marquee.alt")}
      />

      <main className="flex-1">
        <Hero phase={phase} phaseLabel={phaseLabel} examDate={examDate} />

        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Question Paper Card */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{t("home.questionPaper.title")}</CardTitle>
                  </div>
                  <CardDescription>
                    {t("home.questionPaper.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {questionPaperURL ? (
                    <Button asChild className="w-full min-h-[44px]">
                      <a
                        href={questionPaperURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        {t("home.questionPaper.download")}
                      </a>
                    </Button>
                  ) : (
                    <Button disabled className="w-full min-h-[44px]">
                      <FileText className="mr-2 h-5 w-5" />
                      {t("home.questionPaper.notAvailable")}
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Exam Instructions Card */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>{t("home.instructions.title")}</CardTitle>
                  </div>
                  <CardDescription>
                    {t("home.instructions.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {instructionsURL ? (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full min-h-[44px] border-blue-200 hover:bg-blue-50"
                    >
                      <a
                        href={instructionsURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        {t("home.instructions.download")}
                      </a>
                    </Button>
                  ) : (
                    <Button disabled className="w-full min-h-[44px]">
                      <BookOpen className="mr-2 h-5 w-5" />
                      {t("home.instructions.notAvailable")}
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Results Card */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Award className="h-6 w-6 text-success" />
                    </div>
                    <CardTitle>{t("home.results.title")}</CardTitle>
                  </div>
                  <CardDescription>
                    {t("home.results.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {resultsURL ? (
                    <Button
                      asChild
                      variant="default"
                      className="w-full min-h-[44px] bg-green-600 hover:bg-green-700"
                    >
                      <a
                        href={resultsURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Award className="mr-2 h-5 w-5" />
                        {t("home.results.view")}
                      </a>
                    </Button>
                  ) : (
                    <Button disabled className="w-full min-h-[44px]">
                      <Award className="mr-2 h-5 w-5" />
                      {t("home.results.notPublished")}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Important Information */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>{t("home.importantInfo.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>{t("home.importantInfo.connection")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>{t("home.importantInfo.download")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>{t("home.importantInfo.results")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>{t("home.importantInfo.queries")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
